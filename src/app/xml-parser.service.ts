import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class XmlParserService {

  constructor() { }

  parseXml(xmlData: string): any {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlData, 'text/xml');

    // Access and extract data from xmlDoc as needed
    const registration = xmlDoc.getElementsByTagName('Registration')[0].textContent;
    const transid = xmlDoc.getElementsByTagName('Transid')[0].textContent;
    const resultCode = xmlDoc.getElementsByTagName('ResultCode')[0].textContent;
    const result = xmlDoc.getElementsByTagName('Result')[0].textContent;
    const url = xmlDoc.getElementsByTagName('URL')[0].textContent;

    // Create an object to hold the extracted data
    const parsedData = {
      Registration: registration,
      Transid: transid,
      ResultCode: resultCode,
      Result: result,
      URL: url
    };

    return parsedData;
  }


  parseXmlForStatus(xml: string): any {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, 'text/xml');

    const conferencepay = xmlDoc.querySelector('conferencepay');
    if (!conferencepay) {
      return null;
    }

    const properties = {
      Registration: conferencepay.querySelector('Registration').textContent,
      Transid: conferencepay.querySelector('Transid').textContent,
      BankTransid: conferencepay.querySelector('BankTransid').textContent,
      Authid: conferencepay.querySelector('Authid').textContent,
      Amount: conferencepay.querySelector('Amount').textContent,
      ResultCode: conferencepay.querySelector('ResultCode').textContent,
      Result: conferencepay.querySelector('Result').textContent,
      Refund: conferencepay.querySelector('Refund').textContent,
      TranDetails: conferencepay.querySelector('TranDetails').textContent
    };

    return properties;
  }
}
