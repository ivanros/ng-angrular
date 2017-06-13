/**
 * Minion class
 */
export class Minion {

  constructor(
    public id: number,
    public name: string,
    public gender: string,
    public numberOfEyes: number,
    public picture?: string,
    public isFriendly?: boolean,
    public status?: string,
    public skills?: any,
    public vocabulary?: any
  ) { }

}
