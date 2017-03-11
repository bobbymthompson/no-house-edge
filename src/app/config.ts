export class config {

    public static getEnvironmentVariable(value) {
        var environment:string;
        var data = {};
        environment = window.location.hostname;
        switch (environment) {
            case'localhost':
                data = {
                    endPoint: 'http://localhost:8100/'
                };
                break;
             case 'https://no-house-edge.herokuapp.com/':
                data = {
                    endPoint: 'https://no-house-edge-api.herokuapp.com/'
                };
                break;

            default:
                data = {
                    endPoint: 'http://localhost:8100/'
                };
        }
        return data[value];
    }
}