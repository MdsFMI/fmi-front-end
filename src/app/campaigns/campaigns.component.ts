import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CampaignService} from "../services/CampaignService";



export class Campaign {
  id: string;
  description: string;
  campaignGoal: number;
  currentAmount: number;
  constructor(
    id: string,
    description: string,
    campaignGoal: number,
    currentAmount: number

  ) {
    this.id = id;
    this.description = description;
    this.campaignGoal = campaignGoal;
    this.currentAmount = currentAmount;
  }
}


@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css']
})
export class CampaignsComponent implements OnInit {

  campaigns!: Campaign[];
  headElements = ['Id', 'Description', 'Goal', 'Current amount', 'Action'];
  constructor(private campaignService:CampaignService) {
  }


  ngOnInit(): void {

    this.campaignService.getAllCampaigns().subscribe(data=>{
      this.campaigns=data;
      console.log(data);
    })

    //this.getCampaigns();
    // let camps : any = [];
    // for (let i = 1; i <= 15; i++) {
    //   camps.push({ id: i, description: 'campaign ' + i, campaignGoal: i * 500, currentAmount: i * 100 });
    // }
    // this.campaigns = camps;
    // console.log(this.campaigns)

  }

}
