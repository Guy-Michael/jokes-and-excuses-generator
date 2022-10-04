import {HttpClient, HttpXhrBackend} from '@angular/common/http';
import { Joke } from '../Models/Joke';
const httpClient = new HttpClient(new HttpXhrBackend({build: () => new XMLHttpRequest() }));

const SERVER_URL: string = `https://dad-jokes.p.rapidapi.com/random/joke`;
const headers =  
{
    'X-RapidAPI-Key': '5d46e99238msh765fd716a8afb2ap129cfejsne2e05a38e1f4',
    'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
}


export class HttpUtils
{
    static async getJokes(): Promise<Joke[]>
    {
        let jokes :Joke[] = [];
        return httpClient.get<{success:boolean, body: Joke[]}>(SERVER_URL, {headers}).toPromise()
        .then((data) =>
        {
            if(data?.body)
            {
                for(let joke of data.body)
                {
                    let jokeRes : Joke = {setup: joke.setup, punchline: joke.punchline};
                    console.log({'1': joke, 2: jokeRes});
                    jokes.push(jokeRes);
                }
            }
            return jokes;
        });
    }
}