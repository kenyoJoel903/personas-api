import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Telefono } from "./telefono.model";

@Table({tableName: 'persona'})
export class Persona extends Model {
    
    @Column({primaryKey: true, autoIncrement: true})
    id:number;

    @Column
    nombres:string;

    @Column
    apellidos:string;

    @Column({type: DataType.DATE})
    fechaNacimiento:Date;

    @Column({type: DataType.BOOLEAN})
    estado:boolean;

    @HasMany(() => Telefono)
    telefonos:Array<Telefono>;

}