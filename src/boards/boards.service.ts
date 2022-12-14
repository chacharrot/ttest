import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardStatus } from './boards-status-enum';
import { Board } from './boards.entity';
import { BoardRepository } from './boards.repository';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
    constructor(
        @InjectRepository(Board) private boardRepository: Repository<Board>
    ) {}

    async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
        const { title, description} = createBoardDto;
        console.log(this.boardRepository);
        const board = this.boardRepository.create({
            title,
            description,
            status: BoardStatus.PUBLIC
        })
        await this.boardRepository.save(board);
        return board;
    }

    // createBoard(createBoardDto: CreateBoardDto): Board {
    //     const {title, description} = createBoardDto;
    //     const board: Board = {
    //         id: uuid(),
    //         title,
    //         description,
    //         status: BoardStatus.PUBLIC
    //     }
    //     this.boards.push(board);
    //     return board;
    // }

    async getBoardById(id: number): Promise <Board> {
        const found = await this.boardRepository.findOne({where: {id}});

        if (!found) {
            throw new NotFoundException(`Can not found Board id ${id}`)
        }
        return found;
    }
    // getBoardById(id: string): Board {
    //     const found = this.boards.find(board => board.id === id)

    //     if (!found)
    //         throw new NotFoundException(`Can't find Board with ${id}`);
    //     return found;
    // }
    // deleteBoardById(id: string): void {
    //     const found = this.getBoardById(id);
    //     this.boards = this.boards.filter(board => board.id !== found.id )
    // }

    // updateBoardStatus(id: string, status: BoardStatus){
    //     const board = this.getBoardById(id);
    //     board.status = status;
    //     return board;
    // }
}
