import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CampaignService} from "../services/CampaignService";
import {User} from "../users/users.component";



export class Campaign {
  id!: string;
  descritpion!: string;
  campaignGoal!: number;
  currentAmmount: number = 0;
  requester!: User;
  /*
  constructor(
    id: string,
    description: string,
    campaignGoal: number,
    currentAmount: number,
    requester: User

  ) {
    this.id = id;
    this.descritpion = description;
    this.campaignGoal = campaignGoal;
    this.currentAmmount = currentAmount;
    this.requester = requester;
  }
  */


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
