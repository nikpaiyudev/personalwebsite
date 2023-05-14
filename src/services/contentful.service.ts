import client from "@/config/contentful.config";
import type Contentful from 'contentful';
class ContentfulService {

    public contentfulClient = client;

    public getEntries = (contentType: string): Promise<Contentful.EntryCollection<Contentful.EntrySkeletonType<Contentful.FieldsType, string>, undefined, string>> => {
        return this.contentfulClient.getEntries({
            content_type : contentType,
        });
    }


}

export default ContentfulService;