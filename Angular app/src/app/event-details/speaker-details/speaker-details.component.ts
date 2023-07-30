import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.css']
})
export class SpeakerDetailsComponent implements OnInit {
  public speakerName = "Varun Kumar";
  public expertise = "Cybersecurity Specialist in network security and ethical hacking.";
  public affiliations = "Security Consultant at SecureTech Solutions Inc.";
  public accomplishments = "Winner of the Cybersecurity Excellence Award for Best Network Security Solution";
  public biography = "Varun has helped organizations strengthen their security infrastructure and protect sensitive data from cyber threats.";

  @Input() name:any
  @Input() job:any
  @Input() role:any
  @Input() certifications:any
  @Input() bio:any


  constructor() { }

  ngOnInit(): void {
  }

}
