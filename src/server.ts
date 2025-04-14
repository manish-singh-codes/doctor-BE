import {Server} from 'http';
import app from "./app";
import config from './config';

async function bootstrap(){
    try {
        const server:Server = app.listen(config.port, () =>{
            console.log(`Server running on port ${config.port}`);
        });

        const exitHandler = () =>{
            if(server){
                server.close(() =>{
                    console.log('Server Close')
                })
            }
        };

        const unexpectedHandler = (error: Error) =>{
            console.error('Handler Error:', error);
            exitHandler();
        }
        process.on('uncaughtException', unexpectedHandler);
        process.on('unhandledRejection', unexpectedHandler);

        process.on('SIGTERM', () =>{
            console.log('Sigterm Recieved');
            if(server){
                server.close();
            }
        })
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}

bootstrap();