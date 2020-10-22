import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { User } from 'src/entities/user';
import { LaCampesinaService } from 'src/la-campesina.service';

@Controller('user')
export class UserController {

    constructor(private laCampesinaService: LaCampesinaService) {}

    @Get()
    findAll(@Res() response) {
        return this.laCampesinaService.findAll().then(messageList => {
            response.status(HttpStatus.OK).json({message: "todo ok", listaUser: messageList});
        }
        ).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({message: "error al tratar de obtener User"});
        });
    }


}
