
export enum AppState {
  INVITATION = 'INVITATION',
  LETTER = 'LETTER'
}

export interface LetterConfig {
  name: string;
  relationshipLength: string;
  favoriteMemory: string;
}
