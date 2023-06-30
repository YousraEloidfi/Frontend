export class GlobalConstants {
  static contactNumberRegex(contactNumberRegex: any): (control: import("@angular/forms").AbstractControl<any, any>) => import("@angular/forms").ValidationErrors | null {
    throw new Error('Method not implemented.');
  }
  // Meesage
  public static genericError: string = "Something went wrong. pleases try again later";

  //Regex
  public static nameRegex: string = "[a-zA-Z0-9 ]*";

  public static emailRegex: string = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";

  public static contactNumber: string = "^[e0-9]{10,10}$";

  //variable
  public static error:string = "error";

}
