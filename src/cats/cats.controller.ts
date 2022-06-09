import {Body, Controller, Get, Param, Post, Req} from '@nestjs/common';
import {Request} from "express";
import {CreateCatDto} from "./create-cat.dto";

@Controller('cats')
export class CatsController {

  @Get('get-all')
  findAll(@Req() request: Request): string {
    console.log(request)
    return 'This action return all cats'
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return createCatDto
  }

}
