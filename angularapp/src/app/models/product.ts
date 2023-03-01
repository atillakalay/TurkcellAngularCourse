export class Product {
  Id: number
  Name: string
  type: Type

  constructor(Id: number, Name: string, type: Type) {
    this.Id = Id,
      this.Name = Name,
      this.type = type
  }

}

export enum Type {
  Big = 1,
  Middle = 2,
  Small = 3
}
