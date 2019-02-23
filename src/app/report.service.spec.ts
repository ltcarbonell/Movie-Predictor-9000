import { TestBed, inject } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { MovieService } from './movie.service';

describe('MovieService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterModule, HttpModule],
            providers: [MovieService]
        });
    });

    it('should be created', inject([MovieService], (service: MovieService) => {
        expect(service).toBeTruthy();
    }));
});
