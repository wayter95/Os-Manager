import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('sectors').insert([
         { description: 'Comunicação'},
         { description: 'Procuradoria'},
         { description: 'Obras'},
         { description: 'Recursos Humanos'},
         { description: 'Licitação'},
         { description: 'Gabinete'},
         { description: 'Contabilidade'},
         { description: 'FInanças'},
         { description: 'PSF'},
         { description: 'Hospital'},
         { description: 'Farmacia'},
         { description: 'Planejamento'},
         { description: 'Cetap'},
         { description: 'Secretaria de Educação'},
         { description: 'Planejamento'},
         { description: 'Almoxarifada'},
         { description: 'CRAS'},
         { description: 'Ação Social'},
         { description: 'Escola Alvina'},
         { description: 'Escola CEMEI'},
         { description: 'Pro Infancia'},
    ])
}