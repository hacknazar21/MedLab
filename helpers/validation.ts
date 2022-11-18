export class Validation {
  isEmail(email: string) {
    if (email === "") return true;
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }
  isPasswordsMatch(pass: string, confirm: string) {
    if (confirm === "" || pass === "") return true;
    return confirm === pass;
  }
}
