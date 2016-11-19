import expect from 'expect';

// import { ??? } from '../../src/model';

import {Data} from '../../src/model';
import {Sensor} from '../../src/model';
import {TimeSeries} from '../../src/model';
import {Datum} from '../../src/model';
import {Temperature} from '../../src/model';
import {FAN_SPEED} from '../../src/model';
import {Door} from '../../src/model';

import  { data }  from './sensors_data'
console.log(data.length);

import resultat from '../../src/model';
let t = resultat();

describe('Sensor model tests', () => {
  /* TODO: Ecrire ici la suite de tests pour le modèle objet.*/

  describe('TimeSeries', () => {
        it('Test du premier objet', () => {
            expect(typeof(t[0]) === 'object').toBe(true);
        });

        it('L\'objet = Temperature',() => {
            expect(t[0].type).toEqual('TEMPERATURE');
        });

        t[0].name = 'Température de Bureau';

        it('Test sur l\'objet Température', () => {
            expect(t[0].name).toEqual('Température de Bureau');
        });

        it('Température moyenne', () => {
            expect(t[0].data.getMoy() == 23.11).toBe(true); // (23+23+22+21+23+23+23+25+25)/9 = 23.11
        });
		
	it('Mesure de la température (finale)', () => {
            expect(t[0].data.getLabel()).toEqual('2016-10-19T14:00:00.000Z');
        });
		
	});
	
	describe('Test du deuxième objet', () => {
        it('L\'entité 2 est un objet', () => {
            expect(typeof(t[1]) === 'object').toBe(true);
        });

        it('L\'objet = Door', () => {
            expect(t[1].type).toEqual('DOOR');
        });

        t[1].name = 'Porte du Garage';

        it('Test sur l\'objet Door', () => {
            expect(t[1].name).toEqual('Porte du Garage');
        });

        it('porte est ouverte / fermée', () => {
            expect(t[1].data.isOpen()).toBe(false);
        });
    });
	
	describe('Test du troisième objet', () => {
        it('L\'entité 3 est un objet', () => {
            expect(typeof(t[2]) === 'object').toBe(true);
        });

        it('L\'objet = FAN_SPEED', () => {
            expect(t[2].type).toEqual('FAN_SPEED');
        });

        tab[2].name = 'Ventilateur Ordinateur Bureau';

        it('Test sur l\'objet FAN_SPEED', () => {
            expect(t[2].name).toEqual('Ventilateur Ordinateur Bureau');
        });

        it('Test de ventilation moyenne', () => {
            expect(t[2].data.getMoy() == 1774.5).toBe(true); // (1073+1800+2299+2176+1899+1400) = 1774.5
        });
		
		it('Mesure de la ventilation (finale)', () => {
            expect(t[2].data.getLabel()).toEqual('2016-10-19T10:15:00.000Z');
        });
    });
});
