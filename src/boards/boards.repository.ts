import { ClassSerializerInterceptor } from "@nestjs/common";
import {  EntityRepository, Repository } from "typeorm";
import { BoardStatus } from "./boards-status-enum";
import { Board } from "./boards.entity";
import { CreateBoardDto } from "./dto/create-board.dto";

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
    }