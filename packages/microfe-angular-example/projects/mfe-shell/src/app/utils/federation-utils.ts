type Scope = unknown;
type Factory = () => any;

type Container = {
  init(shareScope: Scope): void;
  get(module: string): Factory;
};

declare const __webpack_init_sharing__: (shareScope: string) => Promise<void>; // webpack
declare const __webpack_share_scopes__: { default: Scope };

const moduleMap: any = {};

function loadRemoteEntry(remoteEntry: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    if (moduleMap[remoteEntry]) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = remoteEntry;

    script.onerror = reject;

    script.onload = () => {
      moduleMap[remoteEntry] = true;
      resolve(); // window is the global namespace
    };

    document.body.append(script);
  });
}

async function lookupExposedModule<T>(
  remoteName: string,
  exposedModule: string
): Promise<T> {
  // Initializes the share scope. This fills it with known provided modules from this build and all remotes
  await __webpack_init_sharing__('default'); // 构建后结果: yield __webpack_require__.I('default');
  const container = (window as any)[remoteName] as Container; // or get the container somewhere else
  // Initialize the container, it may provide shared modules
  await container.init(__webpack_share_scopes__.default);  // yield container.init(__webpack_require__.S.default);
  const factory = await container.get(exposedModule);
  const Module = factory();
  return Module as T;
}

export type LoadRemoteModuleOptions = {
  remoteEntry: string;
  remoteName: string;
  exposedModule: string;
};

export async function loadRemoteModule(
  options: LoadRemoteModuleOptions
): Promise<any> {
  /*
  options = {
    displayName: "Profile"
    exposedModule: "ProfileModule"
    ngModuleName: "ProfileModule"
    remoteEntry: "http://localhost:4201/remoteEntry.js"
    remoteName: "profile"
    routePath: "profile"
  }
  */
  await loadRemoteEntry(options.remoteEntry); // hack 执行 remoteUrl script load
  return await lookupExposedModule<any>(
    options.remoteName,
    options.exposedModule
  );
}