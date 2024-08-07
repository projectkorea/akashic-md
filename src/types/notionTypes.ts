// notionTypes.ts

export interface User {
  object: string;
  id: string;
}

export interface TextContent {
  type: string;
  text: {
    content: string;
    link: string | null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: string | null;
}

export interface RichText {
  id: string;
  type: string;
  rich_text: TextContent[];
}

export interface LastEditedTime {
  id: string;
  type: string;
  last_edited_time: string;
}

export interface Title {
  id: string;
  type: string;
  title: TextContent[];
}

export interface Properties {
  [key: string]: LastEditedTime | RichText | Title;
  "최종 편집 일시": LastEditedTime;
  "저자": RichText;
  "이름": Title;
}

export interface Icon {
  type: string;
  emoji: string;
}

export interface Parent {
  type: string;
  database_id: string;
}

export interface NotionPage {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: User;
  last_edited_by: User;
  cover: null | string;
  icon: Icon | null;
  parent: Parent;
  archived: boolean;
  in_trash: boolean;
  properties: Properties;
  url: string;
  public_url: string | null;
}

export type NotionData = NotionPage[];
