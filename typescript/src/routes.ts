import { Request, Response } from 'express';
import createUser from './services/CreateUser';

// string, number, boolean, object, array
// interface

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'user@example.com',
    password: '123456',
    techs: [
      'Node.js', 
      'ReactJS', 
      'React Native',
      { title: 'Javascript', experience: 100 },
     ],
  });

  user.name = 'World';

  return response.json(user);
}
