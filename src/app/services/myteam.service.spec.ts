import { TestBed, inject } from '@angular/core/testing';

import { MyteamService } from './myteam.service';

describe('MyteamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyteamService]
    });
  });

  it('should be created', inject([MyteamService], (service: MyteamService) => {
    expect(service).toBeTruthy();
  }));
});
