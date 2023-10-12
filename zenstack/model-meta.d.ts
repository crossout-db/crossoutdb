declare const metadata: {
    fields: {
        example: {
            id: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            name: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            createdAt: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            updatedAt: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
        };
        release: {
            id: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            name: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            xoVersion: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            build: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            description: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            battlePass: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            url: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            startDate: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            endDate: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            active: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            itemStats: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            recipes: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            packs: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
        };
        recipe: {
            id: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            result: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: {
                    id: string;
                };
            };
            resultItemId: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            quantity: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            release: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: {
                    id: string;
                };
            };
            releaseId: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            craftCost: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            timestamp: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            active: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            ingredients: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
        };
        recipeItem: {
            id: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            recipe: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: {
                    id: string;
                };
            };
            recipeId: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            item: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: {
                    id: string;
                };
            };
            itemId: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            quantity: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
        };
        pack: {
            id: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            name: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            description: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            steamAppID: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            key: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            coins: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            release: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: {
                    id: string;
                };
            };
            releaseId: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            active: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            items: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            packPrices: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
        };
        packItem: {
            id: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            pack: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: {
                    id: string;
                };
            };
            packId: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            item: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: {
                    id: string;
                };
            };
            itemId: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            quantity: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
        };
        packPrice: {
            id: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            pack: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: {
                    id: string;
                };
            };
            packId: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            timestamp: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            priceUSD: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            priceEUR: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            priceGBP: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            priceRUB: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            discount: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
        };
        category: {
            id: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            name: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            items: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
        };
        faction: {
            id: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            name: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            items: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
        };
        type: {
            id: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            name: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            items: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
        };
        rarity: {
            id: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            name: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            order: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            primaryColor: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            secondaryColor: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            items: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
        };
        item: {
            id: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            name: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            marketDef: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            quantity: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            type: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: {
                    id: string;
                };
            };
            typeId: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            category: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: {
                    id: string;
                };
            };
            categoryId: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            faction: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: {
                    id: string;
                };
            };
            factionId: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            rarity: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: {
                    id: string;
                };
            };
            rarityId: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            level: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            sellPriceMin: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            sellOrders: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            buyPriceMax: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            buyOrders: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            craftCost: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            timestamp: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            active: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            logId: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            itemStats: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            market: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            badgeExchange: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            recipes: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            recipeItems: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            packItems: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            itemSynergies: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
        };
        itemStats: {
            id: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            item: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: {
                    id: string;
                };
            };
            itemId: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            user: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: {
                    id: string;
                };
            };
            userId: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            release: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: {
                    id: string;
                };
            };
            releaseId: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            timestamp: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            description: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            increasesDurability: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            increasesReputationPercent: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            topSpeed: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            ps: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            damage: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            fireRate: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            range: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            accuracy: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            timeToOverheating: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            maxAmmo: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            blastPower: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            addsEnergy: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            tonnage: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            massLimit: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            maxCabinSpeed: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            maxChassisSpeed: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            power: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            cabinPower: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            fuelReserves: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            featureBulletPercent: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            featureMeleePercent: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            featureBlastPercent: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            featureFirePercent: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            featurePassthroughPercent: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            durability: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            energyDrain: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            mass: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            perks: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
        };
        synergy: {
            id: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            name: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            synergyItems: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
        };
        synergyItem: {
            synergy: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: {
                    id: string;
                };
            };
            synergyId: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            item: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: {
                    id: string;
                };
            };
            itemId: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
        };
        market: {
            id: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            item: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: {
                    id: string;
                };
            };
            itemId: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            marketDef: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            sellPriceMin: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            sellOrders: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            buyPriceMax: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            buyOrders: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            craftCost: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            timestamp: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
        };
        badgeExchange: {
            id: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            item: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: {
                    id: string;
                };
            };
            itemId: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            quantity: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            badges: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            active: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            timestamp: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
        };
        log: {
            id: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            timestamp: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            user: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: {
                    id: string;
                };
            };
            userId: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            tableChanged: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            recordId: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            record: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
        };
        account: {
            id: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            userId: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            type: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            provider: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            providerAccountId: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            refresh_token: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            access_token: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            expires_at: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            token_type: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            scope: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            id_token: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            session_state: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            user: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: {
                    id: string;
                };
            };
        };
        session: {
            id: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            sessionToken: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            userId: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            expires: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            user: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: {
                    id: string;
                };
            };
        };
        user: {
            id: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            name: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            role: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            email: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            emailVerified: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            image: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            accounts: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            sessions: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            itemStats: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            log: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: string;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
        };
        verificationToken: {
            identifier: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            token: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: {
                    name: string;
                    args: never[];
                }[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
            expires: {
                name: string;
                type: string;
                isId: boolean;
                isDataModel: boolean;
                isArray: boolean;
                isOptional: boolean;
                attributes: never[];
                backLink: undefined;
                isRelationOwner: boolean;
                isForeignKey: boolean;
                foreignKeyMapping: undefined;
            };
        };
    };
    uniqueConstraints: {
        example: {
            id: {
                name: string;
                fields: string[];
            };
        };
        release: {
            id: {
                name: string;
                fields: string[];
            };
        };
        recipe: {
            id: {
                name: string;
                fields: string[];
            };
        };
        recipeItem: {
            id: {
                name: string;
                fields: string[];
            };
        };
        pack: {
            steamAppID: {
                name: string;
                fields: string[];
            };
            id: {
                name: string;
                fields: string[];
            };
        };
        packItem: {
            id: {
                name: string;
                fields: string[];
            };
        };
        packPrice: {
            id: {
                name: string;
                fields: string[];
            };
        };
        category: {
            id: {
                name: string;
                fields: string[];
            };
        };
        faction: {
            id: {
                name: string;
                fields: string[];
            };
        };
        type: {
            id: {
                name: string;
                fields: string[];
            };
        };
        rarity: {
            id: {
                name: string;
                fields: string[];
            };
        };
        item: {
            marketDef: {
                name: string;
                fields: string[];
            };
            id: {
                name: string;
                fields: string[];
            };
        };
        itemStats: {
            id: {
                name: string;
                fields: string[];
            };
        };
        synergy: {
            id: {
                name: string;
                fields: string[];
            };
        };
        synergyItem: {
            synergyId_itemId: {
                name: string;
                fields: string[];
            };
        };
        market: {
            id: {
                name: string;
                fields: string[];
            };
        };
        badgeExchange: {
            id: {
                name: string;
                fields: string[];
            };
        };
        log: {
            id: {
                name: string;
                fields: string[];
            };
        };
        account: {
            provider_providerAccountId: {
                name: string;
                fields: string[];
            };
            id: {
                name: string;
                fields: string[];
            };
        };
        session: {
            id: {
                name: string;
                fields: string[];
            };
            sessionToken: {
                name: string;
                fields: string[];
            };
        };
        user: {
            id: {
                name: string;
                fields: string[];
            };
            email: {
                name: string;
                fields: string[];
            };
        };
        verificationToken: {
            identifier_token: {
                name: string;
                fields: string[];
            };
            token: {
                name: string;
                fields: string[];
            };
        };
    };
};
export default metadata;
