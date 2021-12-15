import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Inicial1639593246481 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
            await queryRunner.createTable(new Table({
                name: "produto",
                columns: [
                    {
                        name: "id",
                        type: "bigint",
                        isPrimary: true                        
                    },
                    {
                        name: "nome",
                        type: "varchar(1000)"
                    },
                    {
                        name: "valor",
                        type: "decimal"
                    },
                    {
                        name: "promocao",
                        type: "bit"
                    },
                    {
                        name: "valorPromo",
                        type: "decimal"
                    },
                    {
                        name: "imagem",
                        type: "varchar(8000))"
                    }                    
                ]
            }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
