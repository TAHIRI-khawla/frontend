import { Employe } from './employe';

//describe('Employe', () => {
 // it('should create an instance', () => {
  //  expect(new Employe()).toBeTruthy();
 // });
//});



describe('Employe interface', () => {
  it('should create an object that matches the interface', () => {
    const emp: Employe = {
      // Champs hérités de User
      username: 'jdoe',
      nom: 'Doe',
      prenom: 'John',
      email: 'jdoe@example.com',
      password: '123456',
      role: 'EMPLOYE',

      // Champs propres à Employe
      poste: 'Développeur',
      dateEmbauche: new Date(),
      salaire: 3000,
      departement: 'Informatique'
    };
    expect(emp).toBeTruthy();
  });
});

