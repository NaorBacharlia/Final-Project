import { CardTableModel } from './cardtable-info.model';
import { GamesInfoModel } from './game-info.model';

export interface GeneralGameInfoModel
{
    gameInfo: GamesInfoModel;
    cardTable: CardTableModel;
}