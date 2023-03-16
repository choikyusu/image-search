interface KeywordItem {
  key: string;
  value: string;
}

type Newest = 'NEWEST';
type Accurate = 'ACCURATE';
type OrderType = Newest | Accurate;

interface ImageResult {
  documents: ImageInfo[];
  meta: { is_end: boolean; pageable_count: number; total_count: number };
}

type ImageInfo = {
  collection: string;
  datetime: Date;
  display_sitename: string;
  doc_url: string;
  height: number;
  image_url: string;
  thumbnail_url: string;
  width: number;
};
