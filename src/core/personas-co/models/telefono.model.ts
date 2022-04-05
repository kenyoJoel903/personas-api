import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Persona } from "./persona.model";

@Table
export class Telefono extends  Model {

    @Column({primaryKey: true, autoIncrement: true})
    id:number;

    @Column
    telefono:string

    @Column({type: DataType.BOOLEAN})
    estado:boolean;

    @ForeignKey(() => Persona)
    @Column
    personaId: number;

    @BelongsTo(() => Persona)
    persona: Persona

}