export interface WindowSaveOptions {
  offset: {x: number; y: number};
  size: {width: number; height: number};
}

export interface WindowSaveScreenOptions {
  [Key: string]: WindowSaveOptions;
}
