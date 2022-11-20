import { TokenProxy } from './../models/proxy/token.proxy';
import { environment } from './../../environments/environment';
import { RegisterPayload } from './../models/payload/register.payload';
import { Injectable } from "@angular/core";
import { LoginPayload } from '../models/payload/login.payload';
import { HttpAsyncService } from '../modules/http-async/services/http-async.service';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class UserService{

  constructor(private readonly httpAsyncService: HttpAsyncService){}

  async register(payload: RegisterPayload){
    return await this.httpAsyncService.post(environment.api.register, payload)
  }

  async login(payload: LoginPayload):Promise<boolean>{
    const {success, error} = await this.httpAsyncService.post<TokenProxy>(environment.api.login, payload);
    if(success) {
      localStorage.setItem(environment.token, `Bearer ${success.token}`)
      await this.getMe();
    }
    return !!success;
  }

  async getMe(){
    const decoded = jwtDecode(localStorage.getItem(environment.token)) as any;
    const userId = decoded.id;
    const url = environment.api.user.me.replace('{userId}', userId)
    const {success, error} = await this.httpAsyncService.get(url)
    if(success) localStorage.setItem(environment.user, JSON.stringify(success))
  }
}