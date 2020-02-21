import { IsOptional, IsInt, Min, Max } from 'class-validator'
import { Transform } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'

/**
 * The `DTO` for pagination options
 */
export class InternalWithOptionalParamsDto {
  @ApiProperty({
    description: 'The 1-indexed pagination page number (i.e. starts at 1).',
    default: 1,
  })
  @IsOptional()
  @Transform(parseInt)
  @IsInt()
  @Min(0)
  page?: number;

  @ApiProperty({
    description: 'Objects per page for pagination.',
    default: 10,
  })
  @IsOptional()
  @Transform(parseInt)
  @IsInt()
  @Min(0)
  pageSize?: number;
}