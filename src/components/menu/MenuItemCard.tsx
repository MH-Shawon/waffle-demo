import Image from "next/image";
import type { MenuItem } from "@/types/menu";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MenuItemCardProps {
  item: MenuItem;
  isMiddleColumn?: boolean;
}

export function MenuItemCard({
  item,
  isMiddleColumn = false,
}: MenuItemCardProps) {
  return (
    <Card className="group overflow-hidden border-2 border-[rgb(188,160,103)] shadow-none bg-transparent">
      <CardContent className="p-0">
        <div
          className={`relative overflow-hidden rounded-lg bg-gray-100 ${
            isMiddleColumn ? "aspect-[5/6]" : "aspect-[4.8/5.8]"
          }`}
        >
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />

          {/* Price badge - always visible */}
          <Badge
            variant="secondary"
            className={`absolute bg-black/70 text-white font-medium backdrop-blur-sm ${
              isMiddleColumn
                ? "top-3 right-3 text-sm"
                : "top-2.5 right-2.5 text-xs"
            }`}
          >
            {item.price}
          </Badge>

          {/* View Details badge - appears on hover */}
          <Badge
            variant="secondary"
            className={`absolute bg-white/90 text-black font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 ${
              isMiddleColumn
                ? "bottom-3 right-3 text-sm"
                : "bottom-2.5 right-2.5 text-xs"
            }`}
          >
            View Details ↗
          </Badge>

          {/* Item name overlay */}
          <div
            className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent ${
              isMiddleColumn ? "p-4" : "p-3.5"
            }`}
          >
            <h3
              className={`font-medium text-white leading-tight ${
                isMiddleColumn ? "text-sm" : "text-xs"
              }`}
            >
              {item.name}
            </h3>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
