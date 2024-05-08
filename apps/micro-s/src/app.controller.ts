import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
/**
 * App Principal
 */

@Controller() 
export class AppController {
    getHello(): any {
      throw new Error('Method not implemented.');
    }
    constructor(private readonly _appService: AppService) {
        
    }

    @Post('new-user') 
    public async newUser(@Body() body: unknown) {
        
        const fakeUser = {
            email: 'fake_user@microservice.com',
            name: 'Fake User',
            avatar: 'https://fake-image.com',
            password: 'FakePassword_1234'
        };
    
        
        if (!body || Object.keys(body).length === 0) {
            body = fakeUser;
        }
    
        
        if (typeof body === 'object' && body !== null) {
            const { name, email } = body as { name: string; email: string };
    
            if (typeof name === 'string' && typeof email === 'string') {
                // Llama al método newUser de AppService con el cuerpo modificado
                return this._appService.newUser({ name, email });
            }
        }
    
        
        throw new Error('El formato de body es inválido o incompleto.');
    }
}
