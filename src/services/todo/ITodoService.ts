export interface ITodoService {
  create(text: string): void;
  list: () => Promise<string[]>;
}
