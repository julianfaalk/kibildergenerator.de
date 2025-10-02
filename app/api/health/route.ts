import { NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';

export async function GET() {
  try {
    const db = await getDb();

    // Check database connection by pinging
    await db.admin().ping();
    const dbHealthy = true;

    // Count published keywords
    const keywordCount = await db.collection('seoKeywords').countDocuments({ status: 'published' });

    return NextResponse.json({
      status: 'ok',
      database: dbHealthy,
      keywords: keywordCount,
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: 'unhealthy',
        database: false,
        keywords: 0,
      },
      { status: 503 }
    );
  }
}
