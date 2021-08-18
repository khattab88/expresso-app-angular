import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../../shared/services/recipe.service';
import { LogService } from 'src/app/angular-course/services/log.service';

@Component({
  selector: 'recipe-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [
    LogService
  ]
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  // @Output() recipeSelected = new EventEmitter<Recipe>();

  private recipesChangedSubscribtion: Subscription;

  constructor(private logService: LogService,
    private recipeService: RecipeService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.recipesChangedSubscribtion = this.recipeService.recipesChanged
      .subscribe((recipes: Recipe[]) => this.recipes = recipes);
  }

  navigate() {
    // this.router.navigate(['/shopping-list']);
    // this.router.navigate(['shopping-list', { relativeTo: this.route }]);

    this.router.navigate(['/recipes/recipe1']);
  }

  onNewRecipeClicked() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }

  test() {
    var counterObseravble = new Observable(subscriber => {
      let count = 0;

      setInterval(() => {
        subscriber.next(count);

        if (count === 7) {
          subscriber.complete();
        }

        if (count === 10) {
          subscriber.error(new Error("Error in counter observable!"));
        }

        count++;
      }, 500);
    });

    var counterStringObservable = counterObseravble
      .pipe(
        filter((data: any, index) => {
          return data <= 5;
        }),
        map((data) => {
          return `log no. ${data}`;
        }));

    var counterSubscribtion =
      // counterObseravble.subscribe(
      counterStringObservable.subscribe(
        (x) => { console.log(x); },
        (err) => { console.log(err); },
        () => { console.log("counter observable completed!") }
      );
  }

  ngOnDestroy() {
    this.recipesChangedSubscribtion.unsubscribe();
  }

}
