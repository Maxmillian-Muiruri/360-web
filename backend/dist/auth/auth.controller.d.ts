import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        user: {
            id: any;
            username: any;
            email: any;
            role: any;
            firstName: any;
            lastName: any;
        };
        access_token: string;
        refresh_token: string;
    }>;
    register(registerDto: RegisterDto): Promise<{
        username: string;
        email: string | null;
        role: import(".prisma/client").$Enums.UserRole;
        firstName: string | null;
        lastName: string | null;
        phone: string | null;
        country: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        lastLogin: Date | null;
    }>;
    refreshToken(req: any): Promise<{
        access_token: string;
    }>;
    logout(req: any): Promise<{
        message: string;
    }>;
    getProfile(req: any): Promise<any>;
}
