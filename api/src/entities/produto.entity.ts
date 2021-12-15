import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Produto {

    //@PrimaryGeneratedColumn(update: false)
    @Column({ primary: true, insert: false, update: false })
    id: number;

    @Column()
    nome: string;

    @Column("decimal", { precision: 18, scale: 2 })
    valor: number;

    //@Column()
    @Column("bit", { nullable: true, default: () => "'0'"})
    promocao: boolean;

    @Column("decimal", { precision: 18, scale: 2 })
    valorPromo: number;

    @Column()
    imagem: string;

}
