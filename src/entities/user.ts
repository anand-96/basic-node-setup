import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany
} from 'typeorm'

export enum UserType {
  CUSTOMER = 'customer',
  MERCHANT = 'merchant'
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  public user_id: number

  @Column({ type: 'varchar' })
  public first_name: string

  @Column({ type: 'varchar' })
  public last_name: string

  @Column({ type: 'varchar' })
  public email: string

  @Column({ type: 'varchar' })
  public phone: string

  @Column({ type: 'enum', enum: UserType })
  public user_type: UserType

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
