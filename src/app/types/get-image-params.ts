export interface GetImageParams{
  text: string;
  fontScale: number;
  case: string;  // "upper";   // upper, lower or none
  minWordLength: number;  // 3;
  rotation: number;  // 20;
  fontFamily: string;
  loadGoogleFonts: string;
}
