import { FormControl } from '@angular/forms';

export function  restrictedWords(words: string[]) {
  return (control: FormControl): { [key: string]: any } => {
    if (!words && words.length === 0) {
      return null;
    }

    let invalidWords = words
      .map(w => (control.value.includes(w) ? w : null))
      .filter(w => w != null);

    return invalidWords && invalidWords.length > 0
      ? // tslint:disable-next-line: object-literal-key-quotes
        { restrictedWords: invalidWords.join(', ') }
      : null;
  };
}
