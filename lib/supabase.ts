export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[];

export type Database = {
    graphql_public: {
        Tables: {
            [_ in never]: never;
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            graphql: {
                Args: {
                    operationName?: string;
                    query?: string;
                    variables?: Json;
                    extensions?: Json;
                };
                Returns: Json;
            };
        };
        Enums: {
            [_ in never]: never;
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
    public: {
        Tables: {
            members: {
                Row: {
                    created_at: string;
                    email: string | null;
                    id: number;
                    phone_number: string | null;
                    role_id: number;
                    telegram_id: string | null;
                };
                Insert: {
                    created_at?: string;
                    email?: string | null;
                    id?: number;
                    phone_number?: string | null;
                    role_id?: number;
                    telegram_id?: string | null;
                };
                Update: {
                    created_at?: string;
                    email?: string | null;
                    id?: number;
                    phone_number?: string | null;
                    role_id?: number;
                    telegram_id?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: "members_role_id_fkey";
                        columns: ["role_id"];
                        isOneToOne: false;
                        referencedRelation: "roles";
                        referencedColumns: ["id"];
                    },
                ];
            };
            messages: {
                Row: {
                    body: string;
                    created_at: string;
                    id: number;
                    image: Json | null;
                    member_id: number | null;
                    report_id: number | null;
                };
                Insert: {
                    body: string;
                    created_at?: string;
                    id?: number;
                    image?: Json | null;
                    member_id?: number | null;
                    report_id?: number | null;
                };
                Update: {
                    body?: string;
                    created_at?: string;
                    id?: number;
                    image?: Json | null;
                    member_id?: number | null;
                    report_id?: number | null;
                };
                Relationships: [
                    {
                        foreignKeyName: "messages_member_id_fkey";
                        columns: ["member_id"];
                        isOneToOne: false;
                        referencedRelation: "members";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "messages_report_id_fkey";
                        columns: ["report_id"];
                        isOneToOne: false;
                        referencedRelation: "reports";
                        referencedColumns: ["id"];
                    },
                ];
            };
            priorities: {
                Row: {
                    created_at: string;
                    id: number;
                    name: string;
                };
                Insert: {
                    created_at?: string;
                    id?: number;
                    name: string;
                };
                Update: {
                    created_at?: string;
                    id?: number;
                    name?: string;
                };
                Relationships: [];
            };
            report_titles: {
                Row: {
                    created_at: string;
                    id: number;
                    name: string | null;
                    report_type_Id: number | null;
                };
                Insert: {
                    created_at?: string;
                    id?: number;
                    name?: string | null;
                    report_type_Id?: number | null;
                };
                Update: {
                    created_at?: string;
                    id?: number;
                    name?: string | null;
                    report_type_Id?: number | null;
                };
                Relationships: [
                    {
                        foreignKeyName: "report_titles_report_type_Id_fkey";
                        columns: ["report_type_Id"];
                        isOneToOne: false;
                        referencedRelation: "report_types";
                        referencedColumns: ["id"];
                    },
                ];
            };
            report_types: {
                Row: {
                    created_at: string;
                    id: number;
                    name: string;
                };
                Insert: {
                    created_at?: string;
                    id?: number;
                    name: string;
                };
                Update: {
                    created_at?: string;
                    id?: number;
                    name?: string;
                };
                Relationships: [];
            };
            reports: {
                Row: {
                    closed_at: string | null;
                    created_at: string;
                    deadline: string | null;
                    description: string;
                    executor_member_id: number | null;
                    id: number;
                    in_work_at: string | null;
                    media: Json | null;
                    priority_id: number;
                    report_title_id: number;
                    report_type_id: number;
                    reporter_member_id: number;
                    status_id: number;
                };
                Insert: {
                    closed_at?: string | null;
                    created_at?: string;
                    deadline?: string | null;
                    description: string;
                    executor_member_id?: number | null;
                    id?: number;
                    in_work_at?: string | null;
                    media?: Json | null;
                    priority_id: number;
                    report_title_id: number;
                    report_type_id: number;
                    reporter_member_id: number;
                    status_id?: number;
                };
                Update: {
                    closed_at?: string | null;
                    created_at?: string;
                    deadline?: string | null;
                    description?: string;
                    executor_member_id?: number | null;
                    id?: number;
                    in_work_at?: string | null;
                    media?: Json | null;
                    priority_id?: number;
                    report_title_id?: number;
                    report_type_id?: number;
                    reporter_member_id?: number;
                    status_id?: number;
                };
                Relationships: [
                    {
                        foreignKeyName: "reports_admin_id_fkey";
                        columns: ["executor_member_id"];
                        isOneToOne: false;
                        referencedRelation: "members";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "reports_priority_id_fkey";
                        columns: ["priority_id"];
                        isOneToOne: false;
                        referencedRelation: "priorities";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "reports_report_title_id_fkey";
                        columns: ["report_title_id"];
                        isOneToOne: false;
                        referencedRelation: "report_titles";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "reports_report_type_id_fkey";
                        columns: ["report_type_id"];
                        isOneToOne: false;
                        referencedRelation: "report_types";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "reports_reporter_id_fkey";
                        columns: ["reporter_member_id"];
                        isOneToOne: false;
                        referencedRelation: "members";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "reports_status_id_fkey";
                        columns: ["status_id"];
                        isOneToOne: false;
                        referencedRelation: "statuses";
                        referencedColumns: ["id"];
                    },
                ];
            };
            roles: {
                Row: {
                    created_at: string;
                    id: number;
                    name: string;
                };
                Insert: {
                    created_at?: string;
                    id?: number;
                    name: string;
                };
                Update: {
                    created_at?: string;
                    id?: number;
                    name?: string;
                };
                Relationships: [];
            };
            statuses: {
                Row: {
                    created_at: string;
                    id: number;
                    name: string;
                };
                Insert: {
                    created_at?: string;
                    id?: number;
                    name: string;
                };
                Update: {
                    created_at?: string;
                    id?: number;
                    name?: string;
                };
                Relationships: [];
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            [_ in never]: never;
        };
        Enums: {
            [_ in never]: never;
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
    PublicTableNameOrOptions extends
        | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
        | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends {
        schema: keyof Database;
    }
        ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
              Database[PublicTableNameOrOptions["schema"]]["Views"])
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
          Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
          Row: infer R;
      }
        ? R
        : never
    : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
          PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
          PublicSchema["Views"])[PublicTableNameOrOptions] extends {
          Row: infer R;
      }
        ? R
        : never
    : never;

export type TablesInsert<
    PublicTableNameOrOptions extends
        | keyof PublicSchema["Tables"]
        | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends {
        schema: keyof Database;
    }
        ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
          Insert: infer I;
      }
        ? I
        : never
    : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
          Insert: infer I;
      }
        ? I
        : never
    : never;

export type TablesUpdate<
    PublicTableNameOrOptions extends
        | keyof PublicSchema["Tables"]
        | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends {
        schema: keyof Database;
    }
        ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
          Update: infer U;
      }
        ? U
        : never
    : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
          Update: infer U;
      }
        ? U
        : never
    : never;

export type Enums<
    PublicEnumNameOrOptions extends
        | keyof PublicSchema["Enums"]
        | { schema: keyof Database },
    EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
        ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
        : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
    ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
    : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;

export type CompositeTypes<
    PublicCompositeTypeNameOrOptions extends
        | keyof PublicSchema["CompositeTypes"]
        | { schema: keyof Database },
    CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
        schema: keyof Database;
    }
        ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
        : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
    ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
    : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;
