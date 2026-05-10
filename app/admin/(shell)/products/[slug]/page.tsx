import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductEditForm from "./ProductEditForm";

export default async function ProductEditPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();
  return <ProductEditForm product={product} />;
}
