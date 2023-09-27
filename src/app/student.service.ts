import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { createClient } from "@supabase/supabase-js";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StudentService {
  supabaseUrl = "http://210.18.189.94:8093";
  supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE";

  constructor(private http: HttpClient) {}

  private supabase = createClient(this.supabaseUrl, this.supabaseKey);

  async getAllStudents() {
    const { data, error } = await this.supabase.from("student").select("*");

    if (error) {
      console.error("Error fetching students:", error.message);
      return [];
    }
    console.log("student : ", data);

    return data;
  }

  async insertStudent() {
    const { data, error } = await this.supabase
      .from("student")
      .insert([{ name: "Gov", dept: "mech" }])
      .select();

    if (error) {
      console.error("Error fetching students:", error.message);
      return '';
    }
    console.log("insert student : ", data);

    return data;
  }

  makeHttpRequest(): Observable<any> {
    // Define the URL
    const url = "http://210.18.189.94:8093/rest/v1/company?select=*";

    // Define the API keys as form variables
    const apikey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE";
    const authorization =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE";

    // Create a HttpParams object to hold the form variables
    const params = new HttpParams()
      .set("apikey", apikey)
      .set("Authorization", authorization);

    // Make the HTTP GET request with the form variables
    return this.http.get(url, { params });
  }
}
