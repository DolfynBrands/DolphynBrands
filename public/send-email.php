<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Load environment variables from .env file
if (file_exists(__DIR__ . '/../.env')) {
    $env = file_get_contents(__DIR__ . '/../.env');
    $lines = explode("\n", $env);
    foreach ($lines as $line) {
        if (strpos($line, '=') !== false && !str_starts_with(trim($line), '#')) {
            list($key, $value) = explode('=', $line, 2);
            putenv(trim($key) . '=' . trim($value));
        }
    }
}
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$company = $_POST['company'] ?? '';
$message = $_POST['message'] ?? '';

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com'; // Use your SMTP server
    $mail->SMTPAuth   = true;
    $mail->Username   = $_ENV['SMTP_USERNAME'] ?? getenv('SMTP_USERNAME');
    $mail->Password   = $_ENV['SMTP_PASSWORD'] ?? getenv('SMTP_PASSWORD');
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    //Recipients
    $mail->setFrom($_ENV['SMTP_FROM_EMAIL'] ?? getenv('SMTP_FROM_EMAIL') ?? 'contact@dolfynbrands.com', 'Dolfyn Brands Website');
    $mail->addAddress($_ENV['SMTP_TO_EMAIL'] ?? getenv('SMTP_TO_EMAIL') ?? 'contact@dolfynbrands.com');

    // Content
    $mail->isHTML(true);
    $mail->Subject = "New Contact for Dolfyn Brands - $name";
    $mail->Body    = "
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Company:</strong> $company</p>
        <p><strong>Message:</strong><br>$message</p>
    ";

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Message sent!']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo]);
} 