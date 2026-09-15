create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text unique,
  phone text,
  role text not null check (role in ('admin','teacher','parent')),
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.classes (
  id uuid primary key default gen_random_uuid(),
  class_name text not null,
  academic_year text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.sections (
  id uuid primary key default gen_random_uuid(),
  class_id uuid not null references public.classes(id) on delete cascade,
  section_name text not null,
  class_teacher_id uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

create table if not exists public.students (
  id uuid primary key default gen_random_uuid(),
  admission_number text not null,
  roll_number integer not null,
  full_name text not null,
  date_of_birth date,
  gender text,
  class_id uuid not null references public.classes(id),
  section_id uuid not null references public.sections(id),
  parent_id uuid references public.profiles(id),
  parent_name text,
  parent_phone text,
  parent_email text,
  address text,
  photo_url text,
  status text not null default 'active' check (status in ('active','archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.parents (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references public.profiles(id),
  full_name text not null,
  phone text,
  email text,
  relationship text,
  notification_preference text default 'In-App',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.parent_students (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid not null references public.parents(id) on delete cascade,
  student_id uuid not null references public.students(id) on delete cascade,
  relationship text,
  created_at timestamptz not null default now()
);

create table if not exists public.teacher_classes (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references public.profiles(id),
  class_id uuid not null references public.classes(id),
  section_id uuid not null references public.sections(id),
  academic_year text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.attendance (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.students(id) on delete cascade,
  class_id uuid not null references public.classes(id),
  section_id uuid not null references public.sections(id),
  attendance_date date not null,
  status text not null check (status in ('present','absent','late','leave')),
  marked_by uuid references public.profiles(id),
  marked_at timestamptz not null default now(),
  remarks text,
  notification_sent boolean not null default false,
  notification_sent_at timestamptz,
  notification_status text default 'pending' check (notification_status in ('pending','sent','failed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (student_id, attendance_date)
);

create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.students(id),
  parent_id uuid references public.parents(id),
  attendance_id uuid references public.attendance(id),
  notification_type text not null check (notification_type in ('absent','attendance_update','system')),
  title text not null,
  message text not null,
  channel text not null check (channel in ('SMS','WhatsApp','Email','In-App')),
  status text not null default 'pending' check (status in ('pending','sent','failed')),
  sent_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id),
  action text not null,
  entity_type text,
  entity_id uuid,
  metadata jsonb default '{}',
  created_at timestamptz not null default now()
);

create index if not exists attendance_date_idx on public.attendance(attendance_date);
create index if not exists attendance_student_idx on public.attendance(student_id);
create index if not exists attendance_class_idx on public.attendance(class_id);
create index if not exists attendance_section_idx on public.attendance(section_id);
create index if not exists parent_students_parent_idx on public.parent_students(parent_id);
create index if not exists notifications_parent_idx on public.notifications(parent_id);
