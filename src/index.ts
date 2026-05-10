type SyncStatus = "idle" | "syncing" | "success" | "failed";

type SyncInfo = {
  status: SyncStatus;
  lastSyncedAt: string | null;
  errorMessage?: string;
};

const successSync: SyncInfo = {
  status: "success",
  lastSyncedAt: "2026-05-09T10:00:00Z",
};

const failedSync: SyncInfo = {
  status: "failed",
  lastSyncedAt: null,
  errorMessage: "Network error",
};

console.log(`Sync status: ${successSync.status}`);
console.log(`Last synced at: ${successSync.lastSyncedAt ?? "Not synced yet"}`);
console.log("")

console.log(`Sync status: ${failedSync.status}`);
console.log(`Last synced at: ${failedSync.lastSyncedAt ?? "Not synced yet"}`);
console.log(`Last synced at: ${failedSync.errorMessage ?? "no error"}`);
