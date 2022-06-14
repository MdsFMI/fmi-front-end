import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CampaignService} from "../services/CampaignService";
import {Campaign} from "../model/campaign";


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
    this.initData();

  }

  initData() {
    this.campaignService.getAllCampaigns().subscribe(data=>{
      this.campaigns=data;
      console.log(data);
    })
  }

  onDelete(campaignId: string) {
    this.campaignService.deleteCampaignById(campaignId).subscribe(data=>{
      console.log(data);
      this.initData();
    }, error => {
      console.log(error);
    });
    console.log(campaignId);
    console.log("clicked");
  }
}
