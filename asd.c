#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

struct livestock {
    char species[10];
    char gender;
    int size;
    int weight;
    float price;
};
void breed(struct livestock* a, char* species) {
    if (rand() % 2 == 0)
        a->gender = 'F';
    else
        a->gender = 'M';

    if (strcmp(a->species, "sheep") == 0) {
        strcpy(a->species, "sheep");
        a->size = (rand() % 201) + 100;
        a->weight = (rand() % 201) + 400;
        a->price = (rand() % 201) + 100;
    }
    else if (strcmp(a->species, "horse") == 0) {
        a->size = (rand() % 201) + 300;
        a->weight = (rand() % 201) + 700;
        a->price = (rand() % 301) + 300;
    }
    else if (strcmp(a->species, "pig") == 0) {
        a->size = (rand() % 201) + 200;
        a->weight = (rand() % 201) + 500;
        a->price = (rand() % 301) + 200;
    }
};
void bid(struct livestock* a) {
    if (a->gender == 'F')
        a->price *= 1.1;

    if (strcmp(a->species, "sheep") == 0) {
        if (a->size > 200)
            a->price *= 1.1;
        if (a->weight > 500)
            a->price *= 1.1;
    }
    else if (strcmp(a->species, "horse") == 0) {
        if (a->size > 400)
            a->price *= 1.1;
        if (a->weight > 800)
            a->price *= 1.1;
    }
    else if (strcmp(a->species, "pig") == 0) {
        if (a->size > 300)
            a->price *= 1.1;
        if (a->weight > 600)
            a->price *= 1.1;
    }

};
float selling(struct livestock a, struct livestock b, struct livestock c) {
    return a.price + b.gender + c.price;
};

int main() {

    srand((unsigned)time(NULL));

    struct livestock pig_stock, sheep_stock, horse_stock;

    float sales = 0;

    breed(&pig_stock, "pig");
    breed(&sheep_stock, "sheep");
    breed(&horse_stock, "horse");

    //breed 후 출력문들

    printf("\t\t★open Bidding! ★\n");
    printf("-----------------------------------------------\n");
    printf("\tStock_A\t\tStock_B\t\tStock_C\t\t|\n");
    printf("------------------------------------------------\n");
    printf("Species | %s\t\t%s\t\t%s\t|\n",pig_stock.species, sheep_stock.species, horse_stock.species);
    printf("-----------------------------------------------------\n");
    printf("Gender  | %c\t\t%c\t\t%c\t\t|\n", pig_stock.gender, sheep_stock.gender, horse_stock.gender);
    printf("----------------------------------------------------\n");
    printf("Size   | %dcm \t\t%dcm \t\t%dcm\t|\n", pig_stock.size, sheep_stock.size, horse_stock.size);
    printf("----------------------------------------------------\n");
    printf("Weight  | %dkg\t\t%dkg\t\t%dkg\t|\n", pig_stock.weight, sheep_stock.weight, horse_stock.weight);
    printf("----------------------------------------------------\n");
    printf("Price  | $ %f\t\t$ %f\t\t$ %f\t", pig_stock.price, sheep_stock.price, horse_stock.price);


    bid(&pig_stock);
    bid(&sheep_stock);
    bid(&horse_stock);

    //bid 후 출력문들

    sales = selling(pig_stock, sheep_stock, horse_stock);

    printf("\n>> Total: $ %.1f\n\n", sales);


    return 0;
}