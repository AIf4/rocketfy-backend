import { Module } from '@nestjs/common';
import { ProductsService } from './services/products.service';
import { ProductsController } from './controllers/products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/product.schema';

@Module({
  imports: [ MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]) ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}